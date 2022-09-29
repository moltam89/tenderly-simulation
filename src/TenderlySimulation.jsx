import { useEffect, useState } from "react";
import axios from "axios";

const TENDERLY_USER = process.env.REACT_APP_TENDERLY_USER;
const TENDERLY_PROJECT = process.env.REACT_APP_TENDERLY_PROJECT;
const TENDERLY_ACCESS_KEY = process.env.REACT_APP_TENDERLY_ACCESS_KEY;

const SIMULATE_URL = `https://api.tenderly.co/api/v1/account/${TENDERLY_USER}/project/${TENDERLY_PROJECT}/simulate`;
const OPTS = {
  headers: {
    'X-Access-Key': TENDERLY_ACCESS_KEY
  }
}

export default function TenderlySimulation( {params} ) {
	useEffect(()=> {
		const simulateTransaction = async () => {
			try {
				const body = {
					"network_id": params.chainId ? parseInt(params.chainId, 16) : 1,
					"from": params.from,
					"to": params.to,
					"input": params.data ? params.data : "",
					"gas": parseInt(params.gas, 16),
					"gas_price": "0",
					"value": params.value ? parseInt(params.value, 16) : "0",
					// simulation config (tenderly specific)
					"save_if_fails": true,
					"save": true,
					//"simulation_type": "quick"
				}

				const resp = await axios.post(SIMULATE_URL, body, OPTS);

				console.log("resp.data.simulation.id", resp.data.simulation.id)
			}
			catch(error) {
				console.error("simulateTransaction", error)
			}
		}
		
		simulateTransaction();
	},[]);

	return (
		<div>
			Tenderly Simulation Skeleton {params.chainId}
		</div>
	);  
}