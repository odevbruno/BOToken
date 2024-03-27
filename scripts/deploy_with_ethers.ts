import { deploy } from './ethers-lib'

(async () => {
  try {
    const result = await deploy('SampleERC20', ["BOToken", "BOT", 18, 1000])
    console.log(`address: ${result.address}`)
  } catch (e) {
    console.log(e.message)
  }
})()