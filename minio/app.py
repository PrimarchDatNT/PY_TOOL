from minio import Minio
from minio.error import S3Error


def main():
    # Create a client with the MinIO server playground, its access key
    # and secret key.
    client = Minio(
        "play.min.io",
        access_key="Q3AM3UQ867SPQQA43P2F",
        secret_key="zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG",
    )

    # Make 'asiatrip' bucket if not exist.
    found = client.bucket_exists("movis")
    if not found:
        client.make_bucket("movis")
    else:
        print("Bucket 'movis' already exists")

    # Upload '/home/user/Photos/asiaphotos.zip' as object name
    # 'asiaphotos-2015.zip' to bucket 'asiatrip'.
    client.fput_object(
        "movis", "asiaphotos-2015.zip", "/home/user/Photos/asiaphotos.zip",
    )
    print('All done')


if __name__ == "__main__":
    try:
        main()
    except S3Error as exc:
        print("error occurred.", exc)