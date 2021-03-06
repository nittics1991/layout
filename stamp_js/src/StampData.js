/**
*   スタンプ文字データ
*
*   @param Object dataset
*/
let StampData = function(dataset) {
    this.text_aligns = ['left', 'center', 'right'];
    this.vertical_aligns = ['top', 'middle', 'bottom'];
    this._init(dataset);
};

/**
*   _init
*
*   @param Object dataset
*/
StampData.prototype._init = function(dataset) {
    this.stamp_text = typeof dataset.stamp_text !== 'undefined'?
        dataset.stamp_text:'';

    this.font_family = typeof dataset.font_family !== 'undefined'
        && dataset.font_family !== null?
        dataset.font_family:'';

    this.font_size = typeof dataset.font_size !== 'undefined'?
        dataset.font_size:10;

    this.text_align = typeof dataset.text_align !== 'undefined'?
        dataset.text_align:'left';

    this.vertical_align = typeof dataset.vertical_align !== 'undefined'?
        dataset.vertical_align:'top';

    this.margin_size = typeof dataset.margin_size !== 'undefined'?
        dataset.margin_size:1;
};

/**
*   validate
*
*   @return bool
*/
StampData.prototype.validate = function() {
    if (!isFinite(this.font_size)) return false;

    if (this.text_aligns.indexOf(this.text_align) === -1)
        return false;

    if (this.vertical_aligns.indexOf(this.vertical_align) === -1)
        return false;

    if (!isFinite(this.margin_size)) return false;

    return true;
};
