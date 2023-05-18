terraform {
  backend "gcs"{
    bucket = "bucket-name-example"
    prefix = "backend"
  }
}
variable "bucket_name"{
    type = "string"
    default = "example-bucket-name"
}
resource "google_storage_bucket" "mybucket"{
    name = var.bucket_name
}