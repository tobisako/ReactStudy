export default async function handler(req, res) {
  //const headers = req.headers;
  //const query = req.query;

  if (req.query === undefined) {
    res.status(400).json({ message: 'err' });
    return;
  }
  const zip_high = req.query['ziphigh'];
  const zip_low = req.query['ziplow'];

  // URL組み立て
  const url = `http://api.thni.net/jzip/X0401/JSON/${zip_high}/${zip_low}.js`;
  console.log('/api/zipcode.ts :' + url);
  const ret = await exec(url);
  res.status(200).json(ret);
}

const exec = async (url) => {
  const response = await fetch(url);
  const res = await response.json();
  console.log('EXEC-OK! :' + JSON.stringify(res));
  return res;
};
