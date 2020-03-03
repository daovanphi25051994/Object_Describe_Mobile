const FULL_POWER = 100;
let arrayIdShow = ["samsungShowContent", "iphoneShowContent"];
let arrayClassShow = [".screen-samsung", ".samsung", ".screen-iphone", ".iphone"];
let arrayIdSend = ["content-message-samsung", "content-message-iphone"];

function addClass(selector, myClass) {
    elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add(myClass);
    }
}
function removeClass(selector, myClass) {
    elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove(myClass);
    }
}

function Mobile(name, id, color) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.batteryPower = FULL_POWER;
    this.message = "";
    this.inbox = [];
    this.outbox = [];
    this.status = "on";
    this.getName = function () {
        return this.name;
    };
    this.setName = function (name) {
        this.name = name;
    };
    this.getId = function () {
        return this.id;
    };
    this.setName = function (id) {
        this.id = id;
    };
    this.getColor = function () {
        return this.color;
    };
    this.setColor = function (color) {
        this.color = color;
    };
    this.getStatus = function () {
        return this.status;
    }
    this.setStatus = function (status) {
        this.status = status;
    };
    this.chargeBattery = function () {
        this.batteryPower = FULL_POWER;
    }
    this.getBatteryPower = function () {
        return this.batteryPower;
    }
    this.writeMessage = function (message) {
        this.message = message;
        this.batteryPower -= 5;
    }
    this.sendMessage = function (phone) {
        phone.inbox.push(this.message);
        this.outbox.push(this.message);
        this.batteryPower -= 5;
    }
    this.readInbox = function () {
        return this.inbox;
        this.batteryPower--;
    }
    this.readOutbox = function () {
        return this.outbox;
        this.batteryPower--;
    }
}
let samsung = new Mobile("samsung", "c0220h1", "blue");
let iphone = new Mobile("iphone", "a1102", "white");

function sendMessage(object1, idMessage, object2, class1, class2) {
    let message = document.getElementById(idMessage).value;
    if (message !== "") {
        object1.writeMessage(message);
        object1.sendMessage(object2);
        document.getElementById(idMessage).value = "";
        if (object1.getBatteryPower() <= 0) {
            object1.setStatus("off");
            addClass(class1, 'off');
            addClass(class2, 'black');
        }
    }
}
function readInbox(name, id) {
    let content = "";
    content += "<table>";
    for (let i = 0; i < name.inbox.length; i++) {
        content += "<tr><td>" + (i + 1) + ".</td><td>" + name.inbox[i] + "</td><td><button onclick='deleteInbox( " + i + "," + name.name + ")'>Detele</button></td></tr>";
    }
    content += "</table>";
    document.getElementById(id).innerHTML = content;
}
function deleteInbox(index, nameMobile) {
    if (nameMobile.name == "samsung") {
        nameMobile.inbox.splice(index, 1);
        readInbox(nameMobile, arrayIdShow[0]);
    } else {
        nameMobile.inbox.splice(index, 1);
        readInbox(nameMobile, arrayIdShow[1]);
    }
}
function readOutbox(name, id) {
    let content = "";
    content += "<table>";
    for (let i = 0; i < name.outbox.length; i++) {
        content += "<tr><td>" + (i + 1) + ".</td><td>" + name.outbox[i] + "</td><td><button onclick='deleteOutbox(" + i + "," + name.name + ")'>Detele</button></td></tr>";
    }
    content += "</table>"
    document.getElementById(id).innerHTML = content;
}
function deleteOutbox(index, nameMobile) {
    if (nameMobile.name == "samsung") {
        nameMobile.outbox.splice(index, 1);
        readOutbox(nameMobile, arrayIdShow[0]);
    } else {
        nameMobile.outbox.splice(index, 1);
        readOutbox(nameMobile, arrayIdShow[1]);
    }
}
function showBatteryPower(name, id) {
    let content = name.getBatteryPower();
    document.getElementById(id).innerHTML = content;
}
function chargeButtery(name, id) {
    name.chargeBattery();
    showBatteryPower(name, id);
}
function changeStatus(name, class1, class2) {
    if (name.getBatteryPower() > 0) {
        if (name.getStatus() === "on") {
            name.setStatus("off");
            addClass(class1, 'off');
            addClass(class2, 'black');
        } else {
            name.setStatus("on");
            removeClass(class1, 'off');
            removeClass(class2, 'black');
        }
    }
}





