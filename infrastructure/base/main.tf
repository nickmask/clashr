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

  acm_certificate_arn = "arn:aws:acm:us-east-1:049552520592:certificate/f877e9ff-863b-4af0-90ce-0831a5cb5c65"

  custom_error_response_objects = [
    {
      error_code            = "404"
      error_caching_min_ttl = 0
      response_code         = "200"
      response_page_path    = "/index.html"
    },
  ]
}
