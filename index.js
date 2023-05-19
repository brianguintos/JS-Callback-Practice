function move(element) {
  element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
      element.style.left = left + 'px';
      element.style.bottom = bottom + 'px';
    }

    function moveWithArrowKeys(left, bottom, callback){
      let direction = null;
      let x = left;
      let y = bottom;
  
      element.style.left = x + 'px'
      element.style.bottom = y + 'px'
      
      function moveCharacter(){ 
          if(direction === 'west'){
              x-=1
          }
          if(direction === 'north'){
              y+=1
          }
          if(direction === 'east'){
              x+=1
          }
          if(direction === 'south'){
              y-=1
          }
          element.style.left = x + 'px'
          element.style.bottom = y + 'px'
      }
      
      setInterval(moveCharacter, 1)
      
      document.addEventListener('keydown', function(e){
          if(e.repeat) return;
      
          if(e.key === 'ArrowLeft'){
              direction = 'west'
          }
          if(e.key === 'ArrowUp'){
              direction = 'north'
          }
          if(e.key === 'ArrowRight'){
              direction = 'east'
          }
          if(e.key === 'ArrowDown'){
              direction = 'south'
          }
          callback(direction)
      })
      
      document.addEventListener('keyup', function(e){
          direction = null
          callback(direction)
      })
  }
  
  
    return {
      to: moveToCoordinates,
      withArrowKeys: moveWithArrowKeys
    }
  }
  
  // Create inventory
  const inventory = newInventory();
  move(inventory).to(0, 0);
  
  // Create character
  const character = newImage('assets/green-character/static.gif')

  function handleDirectionChange(direction){
      if(direction === null){
          character.src = 'assets/green-character/static.gif'
      }
      if(direction === 'west'){
          character.src = 'assets/green-character/west.gif'
      }
      if(direction === 'north'){
          character.src = 'assets/green-character/north.gif'
      }
      if(direction === 'east'){
          character.src = 'assets/green-character/east.gif'
      }
      if(direction === 'south'){
          character.src = 'assets/green-character/south.gif'
      }
  }
  
  move(character).withArrowKeys(100, 250, handleDirectionChange)
  
  
  let direction = null;
  let x = 100;
  let y = 250;
  
  // // Move character in an interval
  // setInterval(function() {
  //   if (direction === 'west') {
  //     x -= 3;
  //   }
  //   if (direction === 'north') {
  //     y += 3;
  //   }
  //   if (direction === 'east') {
  //     x += 3;
  //   }
  //   if (direction === 'south') {
  //     y -= 3;
  //   }
  //   move(character).to(x, y);
  // }, 100);
  
  // Create other elements and move them
  move(newImage('assets/tree.png')).to(200, 450);
  move(newImage('assets/pillar.png')).to(350, 250);
  move(newImage('assets/pine-tree.png')).to(450, 350);
  move(newImage('assets/crate.png')).to(150, 350);
  move(newImage('assets/well.png')).to(500, 575);
  move(newItem('assets/sword.png')).to(500, 555);
  move(newItem('assets/shield.png')).to(165, 335);
  move(newItem('assets/staff.png')).to(600, 250);
  
  // Create new inventory
  function newInventory() {
    return document.createElement('div');
  }
  
  // Create new image element
  function newImage(url, callback) {
    const image = document.createElement('img');
    image.src = url;
    image.onload = function() {
      if (typeof callback === 'function') {
        callback();
      }
    };
    document.querySelector('main').appendChild(image);
    return image;
  }
  
  // Create new inventory item
  function newItem(url) {
    const item = newImage(url);
    item.addEventListener('click', function() {
      item.remove();
      const inventoryItem = new Image();
      inventoryItem.src = url;
      inventory.appendChild(inventoryItem);
    });
    return item;
  }

  // //Event listener for moving character with arrow keys
  // document.addEventListener('keydown', function(e) {
  //   if(e.repeat) return;

  //   if(e.key === 'ArrowLeft') {
  //     direction = 'west'
  //   }
  //   if(e.key === 'ArrowUp') {
  //     direction = 'north'
  //   }
  //   if(e.key === 'ArrowRight') {
  //     direction = 'east'
  //   }
  //   if(e.key === 'ArrowDown') {
  //     direction = 'south'
  //   }
  // })

  // //Event listener to stop character from moving when there's no key being pushed
  // document.addEventListener('keyup', function(e) {
  //   direction = null
  // })




