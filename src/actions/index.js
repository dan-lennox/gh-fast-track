import cloudinary from 'cloudinary';
import { UPDATE_CLOUDINARY_URL, UPDATE_COLOURS } from './types';

export const updateColours = (colours) => async dispatch => {

  await dispatch(updateCloudinaryUrl(colours));

  dispatch({ type: UPDATE_COLOURS, payload: colours });
};

export const updateCloudinaryUrl = (colours) => async dispatch => {

  // Connect to Cloudinary
  // @todo: Ideally don't want to be setting this everytime the action is fired. Move elsewhere.
  cloudinary.config({
    cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  });

  // Retrieve the image url from cloudinary.
  let imageUrl = await cloudinary.url('MOI-2016-0659A_f12_voo2zu', {transformation: [
    {color: colours[0], effect: "colorize:100"},
    {color: colours[1], effect: "colorize:100", overlay: "MOI-2016-0659A_f8_rcvosy"},
    {color: colours[2], effect: "colorize:100", overlay: "MOI-2016-0659A_f1_ze1rsc"},
    {effect: "pixelate:5"},
    {effect: "blur:65"},
    {effect: "multiply", overlay: "greige_cutpile_yambmx", opacity: 100}
  ]});

  dispatch({ type: UPDATE_CLOUDINARY_URL, payload: imageUrl });
};