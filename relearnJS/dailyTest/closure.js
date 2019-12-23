/**
 * @Author: Younger
 * @Date: 2019-06-04
 * @Time: 13:05
 */

var hero = {
    name: "John Doe",
    getSecretIdentity: function() {
        return this.name;
    }
}

var stoleSecretIdentity = hero.getSecretIdentity;
console.log(stoleSecretIdentity());     //undefined
console.log(hero.getSecretIdentity());  //John Doe
