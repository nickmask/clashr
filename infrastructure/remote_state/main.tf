provider "aws" {
  region     = "${var.cloud_region}"
  access_key = "${var.cloud_access_key}"
  secret_key = "${var.cloud_secret_key}"
}

resource "aws_dynamodb_table" "iac_state_lock" {
  name = "${var.project_name}-state-locker"

  read_capacity  = 2
  write_capacity = 2

  hash_key = "LockID"

  lifecycle {
    prevent_destroy = true
  }

  attribute {
    name = "LockID"
    type = "S"
  }
}

resource "aws_s3_bucket" "iac_state_storage" {
  bucket = "${var.project_name}-state-storage"
  acl    = "private"
  region = "${var.cloud_region}"

  lifecycle {
    prevent_destroy = true
  }

  versioning {
    enabled = true
  }
}
