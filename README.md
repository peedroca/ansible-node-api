# Ansible Node and Mongo API
Playground with Ansible Node and MongoDb

Tests running on Raspberry pi 400
SO: Ubuntu 24.10 (GNU/Linux 6.11.0-1004-raspi aarch64)
Memory: 4gb
Disk: 58gb

### Provisioning with ansible

1. Run simple connection with SSH to save host on known_hosts
```bash
ssh pedromoreira@ph.local
```

2. Run the below code to provisioning new machine
```bash
ansible-playbook -i hosts provision_docker.yml 
```
