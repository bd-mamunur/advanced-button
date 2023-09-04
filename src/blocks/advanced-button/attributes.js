import * as constants from './constants';
import * as generators from '../../generators';

const { generateResRangleControlAttributes } = generators;

const {BUTTON_FONTSIZE} = constants;

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
		type: 'number',
		default:'1'
	},
	btnborderStyle:{
		type:'string',
		default:'solid'
	},
	btnBorderColor: {
		type: 'string',
		default:'#ccc'
	},
	btnColor: {
		type: 'string',
		default: '#E5F2EB',
	},
	btnHoverColor:{
		type:'string',
		default:'#4248f5'
	},
	btnBgColor: {
		type: 'string',
		default: '#18C976',
	},
	btnbgHoverColor:{
		type:'string',
		default:'#cccdeb'
	},
	btnPadding:{
		type:'object',
		default:{
			top: '5px',
			left: '20px',
			right: '20px',
			bottom: '5px',
		}
	},

	...generateResRangleControlAttributes({
		controlName: BUTTON_FONTSIZE,
		defaults: {
			[`${BUTTON_FONTSIZE}DeskRange`]: 18,
			[`${BUTTON_FONTSIZE}TabRange`]: 12,
			[`${BUTTON_FONTSIZE}MobRange`]: 10,
			[`${BUTTON_FONTSIZE}Unit`]: 'px',
		},
	}),
};

export default attributes;
