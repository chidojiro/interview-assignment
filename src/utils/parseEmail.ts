const parseEmail = (email: string) => {
  let res = email.replace(/(\.[0-9]+\.)*([0-9])*/g, '');
  if (res.indexOf('randstadcpe') !== -1) {
    res = res.replace(/.aplitrak.com/, '.com').replace(/.broadbean.com/, '.com');
  } else if (res.indexOf('joslinrowejobs') !== -1) {
    res = res.replace(/joslinrowejobs.com/, 'randstadfp.com');
  } else {
    res = res.replace(/.aplitrak.com/, '.co.uk').replace(/.broadbean.com/, '.co.uk');
  }

  return res.toLowerCase();
};

export default parseEmail;
