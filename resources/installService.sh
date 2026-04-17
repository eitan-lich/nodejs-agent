#!/bin/bash

serviceFile="[Unit]
Description=Node.js Agent Service
After=network.target

[Service]
ExecStart=/usr/bin/node /home/eitan/projects/nodejs-agent/index.js
Restart=Always
RestartSec=5

[Install]
WantedBy=multi-user.target"


echo "Installing NodeJS agent service..."
read -p "Any additional args to pass to service? (e.g: --offline --backoffice): " additionalArgs

if [[ -f /etc/systemd/system/nodejs-agent.service ]]; then
  echo "NodeJS agent service is already installed, modifying existing service file"
else
  echo "Installing service file to /etc/systemd/system/nodejs-agent.service"
  echo "$serviceFile" | sudo tee /etc/systemd/system/nodejs-agent.service > /dev/null
fi

sudo sed -i "s|ExecStart=.*|ExecStart=/usr/bin/node /home/eitan/projects/nodejs-agent/index.js $additionalArgs|" /etc/systemd/system/nodejs-agent.service

sudo systemctl daemon-reload
sudo systemctl enable nodejs-agent
sudo systemctl restart nodejs-agent
sudo systemctl status nodejs-agent

