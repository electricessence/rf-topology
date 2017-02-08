import {IReceptacle} from "./IReceptacle";
import {IEmitter} from "./IEmitter";
import {ICable} from "./ICable";
export interface IAmplifier extends IEmitter, IReceptacle
{
	/**
	 * Total amount of signal gain.
	 */
	amplification:number;

	input:ICable;
	output:ICable;
}