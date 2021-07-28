## How to create Node-RED on IBM Cloud

** [Movie is here.](https://youtu.be/SD_EJkBbLG8) **

It's easy to start Node-RED with IBM Cloud service.
You can create Node-RED on IBM Cloud with the following steps below:

1. Access [IBM Cloud Dashboard](https://cloud.ibm.com)
2. Move to the "Catalog" and search with the keyword "Node-RED". And then you can find "Node-RED App" and select it.
3. Select "Create" tab, and click the "Create" button with default values on all fields.
4. You will move to App details screen and wait a munite for the provisioning of Cloudant. (about 1min)
5. Click "Deploy your app" button, and select deploy platform. Please be careful, you should not select Kube or OpenShift because these services are very expensive for individuals, and can't select them with light account. You should select Cloud Foundry. 
6. Click "New" button under the "IBM Cloud API Key" area to generate new API key.
7. All fields will be still default values and click "Next" button.
8. On "Configure the DevOps toolchain" screen, click "Create" button with default values on all fields.
9. After your toolchain is created, you can access the toolchain via "Name" link under "Deployment Automation" tile.
10. Your Delivery Pipeline will be started automatically, and wait untill it is finished. (about 5min)
11. Congratulations! After compete the delivery pipline all tasks, you can aready use Node-RED on IBM Cloud. Please access the IBM Cloud Dashboad top page and move to the Node-RED application via "Cloud Foundry Apps" under "Resource list".

That's all! Have a happy Node-RED life!
