function Mobile(pinPower, message, inbox, send, status,) {
    this.pinPower = pinPower;
    this.message = message;
    this.inbox = inbox;
    this.send = send;
    this.status = status;
    this.setStatus = function (status) {
        this.status = status;
    };
    if (this.status === "on") {
        this.checkStatus = function () {
            this.pinPower--;
            return this.status;
        };
        this.turnOn = function () {
            this.pinPower--;
            if (this.status === "off") {
                this.status = "on";
            }
        };
        this.turnOff = function () {
            this.pinPower--;
            if (this.status === "on") {
                this.status = "off";
            }
        };
        this.charge = function () {
            this.pinPower--;
            while (this.pinPower < 100) {
                this.pinPower++
            }
        };
        this.texting = function (message) {
            this.pinPower--;
            this.message = message;
        };
        this.receive = function (inbox) {
            this.pinPower--;
            this.inbox = inbox;
        };
        this.sendMessage = function () {
            this.pinPower--;
            return this.message;
        };
        this.readInbox = function () {
            this.pinPower--;
            return this.inbox;
        };
        this.readSend = function () {
            this.pinPower--;
            return this.send;
        };
    }
    if (this.pinPower <= 0) {
        this.status = "off";
    }
}

let nokia = new Mobile(90, "im nokia", "i'm phi", "hello", "on");
let iphone = new Mobile(50, "toi la iphone", "chao iphone", "chao ban", "on");
iphone.inbox = nokia.sendMessage();
console.log(iphone.inbox);