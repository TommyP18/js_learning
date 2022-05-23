const styles = ["Jazz", "Blues"]

styles.push("Rock-n-Roll")

styles.splice(styles.length / 2, 1, "Classic")

styles.shift();

styles.unshift("Rap","Raggae")

console.log(styles)