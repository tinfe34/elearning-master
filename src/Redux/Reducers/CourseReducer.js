const stateCourse = {
  listCourse: [],
  listToCart: [],
  isCheckToCart: false,
  courseDetail: null,
};

const CourseReducer = (state = stateCourse, action) => {
  switch (action.type) {

    case "DATA_COURSE": {
      let arr = action.payload.map((obj) => ({
        ...obj,
        active: false,
        giaBan: "999000",
      }));

      state.listCourse = arr;

      return { ...state };
    }

    case "ADD_TO_CART": {
      let gioHangCapNhat = [...state.listToCart];
      let index = gioHangCapNhat.findIndex(
        (sp) => sp.maKhoaHoc === action.payload.maKhoaHoc
      );
      
      if (index === -1) {
        gioHangCapNhat.push(action.payload);
      }

      state.listToCart = gioHangCapNhat;
      
      localStorage.setItem("cart", JSON.stringify(state.listToCart));
      let list = [...state.listCourse];
      let indexz = list.findIndex(
        (sp) => sp.maKhoaHoc === action.payload.maKhoaHoc
      );
      list[indexz].active = true;

      return { ...state };
    }

    case "REMOVE_TO_CART": {
      let gioHangCapNhat = [...state.listToCart];

      let index = gioHangCapNhat.findIndex(
        (sp) => sp.maKhoaHoc === action.payload
      );
      if (index !== -1) {
        gioHangCapNhat.splice(index, 1);
      }

      state.listToCart = gioHangCapNhat;

      localStorage.setItem("cart", JSON.stringify(state.listToCart));

      let list = [...state.listCourse];
      let indexz = list.findIndex((sp) => sp.maKhoaHoc === action.payload);
      list[indexz] = { ...list[indexz], active: false };
      state.listCourse = list;

      return { ...state };
    }

    case "LOCAL_CART": {
      state.listToCart = action.payload;
      return { ...state };
    }

    case "FETCH_COURSE_DETAIL": {
      state.courseDetail = action.payload;
      return { ...state };
    }

    default:
      return state;
  }
};

export default CourseReducer;
