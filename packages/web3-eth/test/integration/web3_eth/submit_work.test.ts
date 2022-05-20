/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/

import WebSocketProvider from 'web3-providers-ws';

import Web3Eth from '../../../src';
import { getSystemTestProvider } from '../../fixtures/system_test_utils';

describe('Web3Eth.submitWork', () => {
	let web3Eth: Web3Eth;

	beforeAll(async () => {
		web3Eth = new Web3Eth(getSystemTestProvider());
	});

	afterAll(() => {
		if (getSystemTestProvider().startsWith('ws')) {
			(web3Eth.provider as WebSocketProvider).disconnect();
		}
	});

	it('should submit work', async () => {
		const response = await web3Eth.submitWork(
			'0x0000000000000001',
			'0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
			'0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000',
		);
		expect(response).toBe(false);
	});
});
