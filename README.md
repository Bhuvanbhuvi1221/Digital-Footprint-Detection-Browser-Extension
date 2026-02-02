# Digital-Footprint-Detection-Browser-Extension
A Chrome browser extension that detects a user’s digital footprint by analyzing cookies, local and session storage usage, and third-party requests on websites, helping users understand tracking activity and improve online privacy awareness.


🚀 Features

   🔐 Counts cookies used by the current website

   💾 Detects Local Storage and Session Storage usage

   🌐 Identifies third-party network requests
 
   ⚡ Real-time analysis with minimal performance impact

   🎨 Clean, dark-mode friendly UI

   🧩 Built using Manifest V3 (latest Chrome standard)

🧠 How It Works

  When a webpage is opened, the extension analyzes:

   Cookies associated with the site domain

   Data stored in localStorage and sessionStorage

   Network resources loaded by the page

   Third-party requests are identified by comparing resource domains with the main website domain.

   The results are displayed instantly in the extension popup.

📁 Project Structure
Digital-Footprint-Detector/
│
├── manifest.json      # Extension configuration
├── popup.html         # User interface
├── popup.js           # Core logic and data collection
├── background.js      # Service worker
├── content.js         # Reserved for future enhancements
└── icon.png           # Extension icon (optional)

🛠️ Installation (How to Use)

Download or clone this repository:

   git clone https://github.com/Bhuvanbhuvi1221/Digital-Footprint-Detector.git


Open Google Chrome

Go to:

   chrome://extensions


   Enable Developer Mode (top right)

   Click Load unpacked

   Select the project folder

   Visit any website and click the extension icon to view results 🎉

📊 Example Output

Cookies: 10

Local Storage Keys: 3

Session Storage Keys: 2

Third-Party Requests: 15

🔒 Permissions Used

Permission	Purpose

tabs	Access current website

cookies	Analyze cookies

scripting	Execute scripts on pages

storage	Store extension data

host_permissions	Access all URLs

🎯 Use Cases

Privacy awareness

Cybersecurity learning

Academic projects

Resume & portfolio showcase

Understanding web tracking behavior

🧩 Future Enhancements

   Tracker name identification (Google Ads, Meta, etc.)
   
   Privacy risk scoring system
   
   Export analysis report (PDF/CSV)
   
   Firefox compatibility
   
   User notification alerts

📜 License

This project is open-source and free to use for educational and personal purposes.

🤝 Contributing

Pull requests and suggestions are welcome!
Feel free to fork this repository and enhance it further.
