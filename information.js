const myInformation = {
    name : "Florian",
    campus: "Wild Code School Bordeaux"
}

const myInfos = () => {
    return (`${myInformation.name}, ${myInformation.campus}`);
};

module.exports = myInfos;