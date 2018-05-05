variable "project_name" {
  description = "machine-parsable name of the project"
}

variable "project_domain" {
  description = "x"
}

variable "cloud_region" {
  description = "Region code of the cloud service provider (AWS)"
  default     = "ap-southeast-2"
}

variable "cloud_access_key" {
  description = "Access key"
}

variable "cloud_secret_key" {
  description = "Secret key"
}
