const NGOrganization = artifacts.require("NGOrganization");
const Web3 = require("web3");

contract('NGOrganization', (accounts) => {

    let Organization;
    before(async () => {
        Organization = await NGOrganization.deployed();
    })

    it('Should deploy smart contract properly', async () => {
        //const NGOrganization = await NGOrganization.deployed();
        console.log(NGOrganization.address);
        assert(NGOrganization.address !== '');
    }); 

    it('Should make sure the admin is using the system', async () => {
        const receivedAdmin = await Organization.getUser()
        assert.equal(receivedAdmin, "admin")
    })

    it('Should return null when the contract is first developed', async () => {
        const donors = await Organization.getDonors();
        assert.equal(donors.length, 0);
    })

    it('Should return all initial values (treshold, max fund...)', async () => {
        assert.equal(await Organization.getNGOFunds(), 0) 
        assert.equal(await Organization.getSusFunds(), 0) 
        assert.equal(await Organization.getMaxValue(), Web3.utils.toWei('50', 'ether')) 
        assert.equal(await Organization.getThreshold.call(), Web3.utils.toWei('10', 'ether')) 
    })
   
});
