const nameDict: {[x: string]: string} = {
    // polaris
    akagi_mu: "Ootori_Shikikan",
    hipper_mu: "R-Guitarist",
    gascogne_mu: "GascogneT8",
    sheffield_mu: "ShiningS",
    commander: "commander__",
    cleveland_mu: "Cleveland☆Knight",
    columbia: "Cleve-FC.3",
    montpelier: "Cleve-FC.1",
    denver: "Cleve-FC.2",
    kaga: "Ran_mew",
    eugen: "P.Eugen",
    spee: "GRAFSPEE",
    deutschland: "SPEE_FIGHT",
    shoukaku: "KADEKURU",
    zuikaku: "Zuikaku",
    belfast: "Belfast_inService",
};

const getAccount = (name: string) => nameDict[name] ?? '-';

export {
    nameDict,
    getAccount,
}