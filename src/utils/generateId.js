const generateId = (state = []) => {
  return state.length === 0 ? 1 : Math.max(...state.map(item => item.id)) + 1;
}

export default generateId;
