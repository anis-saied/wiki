---
sidebar_position: 2
---

# Web servers


## Apache
### XAMPP

on ubuntu, 

```bash
cd /opt/lampp
sudo ./xampp start
```

To view all possibilities

```bash
orca@orca-pc:/opt/lampp$ sudo ./xampp control

	start         Start XAMPP (Apache, MySQL and eventually others)
	startapache   Start only Apache
	startmysql    Start only MySQL
	startftp      Start only ProFTPD
	
	stop          Stop XAMPP (Apache, MySQL and eventually others)
	stopapache    Stop only Apache
	stopmysql     Stop only MySQL
	stopftp       Stop only ProFTPD
	
	reload        Reload XAMPP (Apache, MySQL and eventually others)
	reloadapache  Reload only Apache
	reloadmysql   Reload only MySQL
	reloadftp     Reload only ProFTPD
	
	restart       Stop and start XAMPP
	security      Check XAMPP's security
	
	enablessl     Enable SSL support for Apache
	disablessl    Disable SSL support for Apache
	
	backup        Make backup file of your XAMPP config, log and data files
	
	oci8          Enable the oci8 extenssion
	
	panel         Starts graphical XAMPP control panel
```

### how to start apache at the sime time as the vue js app
To achieve running both your Vue.js app (Vite development server) and the Apache server (XAMPP) simultaneously when you run `npm run dev`, you can create a custom npm script that starts both servers. You can use a package like `concurrently` to run multiple commands concurrently. Here are the steps:

1. Install `concurrently` as a development dependency:

   ```bash
   npm install concurrently --save-dev
	```

2. Modify your `package.json` scripts section to include a new script for running both servers:
	```json
	{
	"name": "my-vue-app",
	"private": true,
	"version": "0.0.0",
	"type": "module",
	"scripts": {
		"dev": "concurrently \"npm run vite-dev\" \"npm run apache-dev\"",
		"vite-dev": "vite",
		"apache-dev": "sudo /opt/lampp/xampp startapache", // Add your command to start Apache here
		"build": "vite build",
		"preview": "vite preview"
	},
	"dependencies": {
		"axios": "^1.5.0",
		"bootstrap": "^5.2.3",
		"bootstrap-icons": "^1.11.0",
		"pinia": "^2.1.6",
		"vue": "^3.3.4",
		"vue-router": "^4.2.4"
	},
	"devDependencies": {
		"@vitejs/plugin-vue": "^4.2.3",
		"vite": "^4.4.5",
		"concurrently": "^6.2.1" // Make sure this is added
	}
	}
	```

3. Replace `"start-apache-script"` in the `package.json` with the actual command needed to start your Apache server. The exact command may vary depending on your system setup. Typically, it's something like:
	```json
	"apache-dev": "sudo /opt/lampp/xampp startapache", // Adjust this to match your XAMPP installation path
	```

4. Save the changes to your `package.json` file.

Now, when you run `npm run dev`, it will concurrently start both your **Vite development server** and the **Apache server (XAMPP)** in development mode. Make sure to adjust the apache-dev script to match your XAMPP installation path.