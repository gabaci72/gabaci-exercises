//The OS Module
const os = require('os');
//With the os module saved to the os variable, you can call methods like:

//os.type() — to return the computer’s operating system.
//os.arch() — to return the operating system CPU architecture.
//os.networkInterfaces() — to return information about the network interfaces of the computer, such as IP and MAC address.
//os.homedir() — to return the current user’s home directory.
//os.hostname() — to return the hostname of the operating system.
//os.uptime() — to return the system uptime, in seconds.
//os.userInfo() — to return information about the current user.

//For example, to get the hostname of the operating system, you can use:

console.log(os.hostname());
//This will output the hostname of the operating system.

//To get the uptime of the operating system, you can use:

console.log(os.uptime());

//This will output the system uptime in seconds.

//To get the user information, you can use:

console.log(os.userInfo());
//This will output an object containing information about the current user, such as their username, home directory, and user ID.

//To get the network interfaces, you can use:

console.log(os.networkInterfaces());
//This will output an object containing information about the network interfaces of the computer, such as their IP and MAC addresses.
const local = {  
    'Home Directory': os.homedir(), // Home directory of the current user   
    'Operating System': os.type(), // Operating system type   
    'Last Reboot': os.uptime() // System uptime in seconds   
  }
  
  console.log(local); // Output the local object   

//   const os = require('os');
//Difrent ways to use os module
const server = {  
  architecture: os.arch(),    
  type: os.type(),
  uptime: os.uptime()
}

console.log(server);
