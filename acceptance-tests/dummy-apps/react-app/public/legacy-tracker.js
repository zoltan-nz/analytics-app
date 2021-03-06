function LegacyTracker() {
  this.version = '1.0';

  this.server = null;
  this.clientId = null;

  this.pageName = null;
  this.linkName = null;

  this.url = function () {
    return `${this.server}/track?clientId=${this.clientId}`;
  };

  this.trackPage = function () {
    // tslint:disable-next-line:no-console
    fetch(`${this.url()}&pageName=${this.pageName}`).finally(response => console.log(response));
  };

  this.trackLink = function () {
    // tslint:disable-next-line:no-console
    fetch(`${this.url()}&linkName=${this.linkName}`).finally(response => console.log(response));
  };
}
