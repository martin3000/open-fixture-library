module.exports.name = 'Fine channels';
module.exports.description = 'Whether fine channel aliases are defined';
module.exports.order = 80;

module.exports.hasFeature = function(fixture, fineChannels) {
  return Object.keys(fineChannels).length > 0;
};