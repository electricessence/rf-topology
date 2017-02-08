import {IAttenuator} from "./IAttenuator";
import {ICable} from "./ICable";
import {IReceptacle} from "./IReceptacle";
import {IEmitter} from "./IEmitter";
export interface ITap extends IAttenuator,  IEmitter, IReceptacle
{
	through:ICable;
}