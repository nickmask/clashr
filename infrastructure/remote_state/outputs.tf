output "iac_state_lock_id" {
  value = "${aws_dynamodb_table.iac_state_lock.id}"
}

output "iac_state_storage_id" {
  value = "${aws_s3_bucket.iac_state_storage.id}"
}
