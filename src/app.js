import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  
let pron = ['the', 'our', 'my', 'your', 'his', 'her', 'its', 'their'];
let adj = ['great', 'big', 'small', 'fast', 'slow', 'lazy', 'happy', 'sad', 'angry', 'funny'];
let noun = ['jogger', 'racoon', 'cat', 'dog', 'turtle', 'fish', 'bird', 'lion', 'tiger', 'bear'];
let dom = ['com', 'net', 'org', 'io', 'co', 'info', 'biz', 'me', 'us', 'tv']; 

function generateDomain (pronoun, adj, noun, dom) {
    let count = 0;
    for (i = 0; i < pronoun.length; i++) {
        for (j = 0; j < adj.length; j++) {
            for (k = 0; k < noun.length; k++) {
                for (l = 0; l < dom.length; l++) {
                    console.log(pronoun[i] + adj[j] + noun[k] + "." + dom[l]);
                    count++;
                    if (count >= limit) break;
                }
            }
        }
    }

}

generateDomain(pron, adj, noun, dom, 8);

/* Option 2 without neated loops
function generateRandomDomains(pronoun, adj, noun, dom, count) {
    for (let i = 0; i < count; i++) {
    
        let randomPronoun = pron[Math.floor(Math.random() * pron.length)];
        let randomAdj = adj[Math.floor(Math.random() * adj.length)];
        let randomNoun = noun[Math.floor(Math.random() * noun.length)];
        let randomDom = dom[Math.floor(Math.random() * dom.length)];

        console.log(`${randomPronoun}${randomAdj}${randomNoun}.${randomDom}`);
    }
}
*/
};
