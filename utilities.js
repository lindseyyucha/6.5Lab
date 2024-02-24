
window.onload = function()
{
    const nameList = ['Tifa', 'Aerith', 'Cloud', 'Barret', 'Yuffie', 'Red', 'Biggs', 'Zach', 'Sephiroth', 'Jessie'];
    Alpine.data('randomizer', function() {
        return {
          nameList: nameList,
          randomizeName() {
            const randomIndex = Math.floor(Math.random() * this.nameList.length);
            this.randomizedName = this.nameList[randomIndex];
          }
        };
      });
}