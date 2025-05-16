class NotificationPlatform {
  show(type, message) {
    throw new Error("Method 'show' must be implemented.");
  }
}

class WebPlatform extends NotificationPlatform {
  show(type, message) {
    console.log(`Web Notification: ${type} - ${message}`);
  }
}

class MobilePlatform extends NotificationPlatform {
  show(type, message) {
    console.log(`Mobile Notification: ${type} - ${message}`);
  }
}

class DesktopPlatform extends NotificationPlatform {
  show(type, message) {
    console.log(`Desktop Notification: ${type} - ${message}`);
  }
}

/** ------------------------ */

class Notification {
  constructor(platform) {
    this.platform = platform;
  }

  send(message) {
    throw new Error("Method 'send' must be implemented.");
  }
}

class Message extends Notification {
  send(message) {
    this.platform.show("Message", message);
  }
}

class Alert extends Notification {
  send(message) {
    this.platform.show("Alert", message);
  }
}

class Warning extends Notification {
  send(message) {
    this.platform.show("Warning", message);
  }
}

class Confirmation extends Notification {
  send(message) {
    this.platform.show("Confirmation", message);
  }
}

function main() {
  console.log("[2] Initializing the application ...");

  const web = new WebPlatform();
  const mobile = new MobilePlatform();
  const desktop = new DesktopPlatform();

  const messageWeb = new Message(web);
  const alertMobile = new Alert(mobile);
  const warningDesktop = new Warning(desktop);
  const confirmationWeb = new Confirmation(web);

  messageWeb.send("Hello from Web!");
  alertMobile.send("Hello from Mobile!");
  warningDesktop.send("Hello from Desktop!");
  confirmationWeb.send("Hello from Web!");
}

main();
