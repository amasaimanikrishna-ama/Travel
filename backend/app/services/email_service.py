class EmailService:
    @staticmethod
    def send_email(to_email: str, subject: str, content: str):
        # Email sender logic (SMTP / SES)
        print(f"Sending email to {to_email} with subject: {subject}")
