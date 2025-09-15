from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)
app.secret_key = "your-secret-key"

@app.route("/signup/preferences", methods=["GET", "POST"])
def signup_preferences():
    if request.method == "POST":
        # Xử lý dữ liệu form ở đây
        job_type = request.form.get("job_type")
        work_mode = request.form.get("work_mode")
        salary = request.form.get("salary")
        availability = request.form.get("availability")

        print("Received:", job_type, work_mode, salary, availability)

        # Sau đó redirect hoặc render template lại tùy ý
        return redirect("/success")  # hoặc render_template(...)

    return render_template("preferences.html")  # file HTML bạn gửi mình

if __name__ == "__main__":
    app.run(debug=True)
