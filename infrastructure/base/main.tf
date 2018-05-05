terraform {
  backend "s3" {
    key            = "base/terraform.tfstate"
    region         = "ap-southeast-2"
    bucket         = "clashr-state-storage"
    dynamodb_table = "clashr-state-locker"
  }
}

provider "aws" {
  region     = "${var.cloud_region}"
  access_key = "${var.cloud_access_key}"
  secret_key = "${var.cloud_secret_key}"
}

resource "aws_route53_zone" "main" {
  name = "${var.project_domain}"
}

module "webapp" {
  source  = "AlexanderRMcNeill/secured-static-website/aws"
  version = "1.0.0"

  bucket_name = "${var.project_name}-webapp"

  domain_names = ["${var.project_domain}"]

  hosted_zone_id = "${aws_route53_zone.main.zone_id}"

  acm_certificate_arn = "arn:aws:acm:us-east-1:049552520592:certificate/00577536-d64a-4a7a-8f21-022ddb5d8a58"

  custom_error_response_objects = [
    {
      error_code            = "404"
      error_caching_min_ttl = 0
      response_code         = "200"
      response_page_path    = "/index.html"
    },
  ]
}
