import {CableType} from "./CableType";
import {LengthUnit} from "./LengthUnit";
import {IEmitter} from "./IEmitter";
import {IReceptacle} from "./IReceptacle";
import {IAttenuate} from "./IAttenuate";
export interface ICable extends IAttenuate
{
	/**
	 * The type of cable.
	 */
	type:CableType;

	/**
	 * Length of cable.
	 */
	length:LengthUnit;

	input:IEmitter;
	output:IReceptacle;
}