const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    // TODO:

    if (req.params!== undefined) {
      console.log(req.params);
    if(req.params.id){
      let disdata= discussionsData.filter((el)=>Number(req.params.id) ===el.id);
      if(disdata.length!==0){
      return res.status(200).json(disdata[0]);
      }
      else{
        return res.status(404).end();
      }
    }
    res.json(discussionsData);
  }
}

};


module.exports = {
  discussionsController,
};
