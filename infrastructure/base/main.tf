# ----------------------------------------------------------------------------------------------------------------------
# IAC CONFIG
# ----------------------------------------------------------------------------------------------------------------------
terraform {
  # minimum version for running this blueprint
  required_version = ">= 0.11.7"

  # remote state backend
  backend "s3" {
    key            = "base/terraform.tfstate"
    bucket         = "clashr-state-storage"
    dynamodb_table = "clashr-state-locker"
  }
}

provider "aws" {
  region     = "${var.cloud_region}"
  access_key = "${var.cloud_access_key}"
  secret_key = "${var.cloud_secret_key}"
}

# using this for the AWS Certificate which needs to be in us-east-1
provider "aws" {
  alias      = "us-east-1"
  region     = "us-east-1"
  access_key = "${var.cloud_access_key}"
  secret_key = "${var.cloud_secret_key}"
}

resource "aws_route53_zone" "main" {
  name = "${var.project_domain}"
}

data "aws_acm_certificate" "main_webapp" {
  provider    = "aws.us-east-1"
  domain      = "*.${var.project_domain}"
  statuses    = ["ISSUED"]
  most_recent = false
}

module "webapp" {
  source  = "AlexanderRMcNeill/secured-static-website/aws"
  version = "1.0.0"

  bucket_name = "${var.project_name}-webapp"

  domain_names = ["${var.project_domain}"]

  hosted_zone_id = "${aws_route53_zone.main.zone_id}"

  acm_certificate_arn = "${data.aws_acm_certificate.main_webapp.arn}"

  custom_error_response_objects = [
    {
      error_code            = "404"
      error_caching_min_ttl = 0
      response_code         = "200"
      response_page_path    = "/index.html"
    },
  ]
}
