function solution(num_list) {
    for(let i=0; i<num_list.length/2; i++) {
      let temp = num_list[i];
      num_list[i] = num_list[num_list.length-1-i];
      num_list[num_list.length-1-i] = temp;
      
    }
    return num_list;
}