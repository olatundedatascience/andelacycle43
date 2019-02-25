class User {
    // should have no publicly accessible field
    constructor(name) {
        this._name = name;
        this._isLoggedIn = false;
        this._LastLoggedInAttempt = null;

    }
    isLoggedIn() {
        return this._isLoggedIn;
    }
    getLastLoggedInAt() {
        return this._LastLoggedInAttempt;
    }
    logIn() {
        this._LastLoggedInAttempt = Date.now;
        return 'User can be logged in';
    }
    logOut() {
        return true;
    }
    getName() {}
    setName(name) {}
    canEdit(comment) {
        if(this._name !== comment._author._name) {
            return false
        }
        else {
            return true;
        }
    }
    canDelete(comment) {
        return false;
    }
  }
  
  class Moderator extends User {
      constructor(name) {
            super(name);
      }
    canEdit(comment) {
        if(this._name !== comment._author._name) {
            return false
        }
        else {
            return true;
        }
    }
    canDelete(comment) {
        return true;
    }
  }
  
  class Admin extends Moderator {
    constructor(name) {
        super(name);
  }
    canEdit(comment) {
        return true;
    }
    canDelete(comment) {
        return false;
    }
  }
  
  class Comment {
    constructor(author, message, repliedTo=null) {
        this._author = author;
        this._message = message;
        this._repliedTo = repliedTo;
        this._createdAt = Date.now;
    }
    getMessage() {}
    setMessage(message) {}
    getCreatedAt() {
        return this._createdAt
    }
    getAuthor() {
        return this._author;
    }
    getRepliedTo() {}
    toString() {
        if(this._repliedTo != null) {
            return `Message by ${this._author._name} (replied to ${this._repliedTo._name})`;
        }
        else {
            return `Message by ${this._author._name}`;
        }
    }
  }

  var user = new User("tunde");
  var moderator = new Moderator("akin");
  var amdin = new Admin("admin");
  var comment = new Comment(user, 'hi there', amdin);
  console.log(comment.toString());
  