import * as constants from './constants';
import * as generators from '../../generators';

const { generateResRangleControlAttributes } = generators;

const {BUTTON_FONTSIZE } = constants;

const attributes = {
	uniqueId: {
		type: 'string',
	},
	blockStyle: {
		type: 'object',
	},
	preset:{
		type:'string'
	},
	btnText:{
		type:'string'
	},
	btnLinkObj: {
		type: 'object',
	},
	btnRadius: {
		type: 'string',
		default: '5',
	},
	btnAlign: {
		type: 'string',
		default: 'left',
	},
	btnBorder: {
		type: 'string',
		default: '#ccc',
	},
	btnBorderColor: {
		type: 'string',
	},
	btnColor: {
		type: 'string',
		default: '#ccc',
	},
	btnBgColor: {
		type: 'string',
		default: '#fff',
	},
	
	...generateResRangleControlAttributes({
		controlName: BUTTON_FONTSIZE,
		defaults: {
			[`${BUTTON_FONTSIZE}DeskRange`]: 14,
			[`${BUTTON_FONTSIZE}TabRange`]: 12,
			[`${BUTTON_FONTSIZE}MobRange`]: 10,
			[`${BUTTON_FONTSIZE}Unit`]: 'px',
		},
	}),
};

export default attributes;
