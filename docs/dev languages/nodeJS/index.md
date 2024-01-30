---
sidebar_position: 1
---

# NodeJS 

## Install node.js & npm

### Option 1: Using NodeSource (Recommended for latest version):

- Add the NodeSource repository:
```bash
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
```
- Install Node.js and npm:

After adding the repository, run the following command to install Node.js and npm:
```bash
sudo apt-get install -y nodejs
```
This will install both Node.js and npm.

- Verify the installation:
```bash
node -v
npm -v
```