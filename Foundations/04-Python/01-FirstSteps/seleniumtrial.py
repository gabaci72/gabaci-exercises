from selenium import webdriver

# Assuming your ChromeDriver is in the same directory as your script
chromedriver_path = "chromedriver.exe"  # Replace with the actual path if different

# Create an instance of ChromeOptions (optional for most basic use cases)
options = webdriver.ChromeOptions()

# Optionally configure Chrome options, if needed (e.g., headless mode)
# options.add_argument("--headless")  # To run Chrome in the background

# Create a new Chrome session using the options and ChromeDriver path
driver = webdriver.Chrome(executable_path=chromedriver_path, options=options)

driver.get("https://www.example.com")
print(driver.title)
driver.quit()