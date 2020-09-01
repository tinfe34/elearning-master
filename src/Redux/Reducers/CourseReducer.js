const stateCourse ={
    listCourse : [],
    listToCart: [],
    isCheckToCart: false,
    courseDetail:null
}



const CourseReducer = (state = stateCourse, action) => {
    switch (action.type) {
        case 'DATA_COURSE' : {
            let arr =  action.payload.map(obj=> ({ ...obj, active: false, giaBan:"999000"}))
            // console.log(arr)
            state.listCourse = arr;
          
            
            return {...state}
        }

        case 'ADD_TO_CART' : {
            
            let gioHangCapNhat = [...state.listToCart];
            //Tìm vị trí index của sản phẩm nếu sp tồn tại  thì trả về giá trị -1
            let index = gioHangCapNhat.findIndex((sp) => sp.maKhoaHoc === action.payload.maKhoaHoc);  
            //nếu index trùng với mã đã tồn tại trong giỏ hàng thì tăng số lượng lên 1
            if (index === -1) {

                gioHangCapNhat.push(action.payload);
                
            }
            // // gán giá trị cập nhật
            state.listToCart = gioHangCapNhat;


           
            //lưu local
            localStorage.setItem('cart',JSON.stringify(state.listToCart))
            let list = [...state.listCourse];
            let indexz = list.findIndex((sp) => sp.maKhoaHoc === action.payload.maKhoaHoc);
            list[indexz].active = true; 
            //cập nhật lại state
            return {...state}
            
            
        }


        case 'REMOVE_TO_CART' :{
            let gioHangCapNhat = [...state.listToCart];

          
                
            //Tìm vị trí index của sản phẩm nếu sp tồn tại  thì trả về giá trị -1

            // Tìm vị trí index của sản phẩm nếu sp tồn tại  thì trả về giá trị -1
            let index = gioHangCapNhat.findIndex((sp) => sp.maKhoaHoc === action.payload);
            if(index!== -1){
                gioHangCapNhat.splice(index,1);
            }
            // gán giá trị cập nhật
            state.listToCart = gioHangCapNhat;
            //lưu local
            localStorage.setItem('cart',JSON.stringify(state.listToCart))

            let list = [...state.listCourse];
            let indexz = list.findIndex((sp) => sp.maKhoaHoc === action.payload);
            list[indexz] = {...list[indexz],active: false}; 
            state.listCourse = list;
            // cập nhật lại state
            return {...state}
        }
        case 'LOCAL_CART':{
            state.listToCart = action.payload;
            return {...state}
        }
        case 'FETCH_COURSE_DETAIL':{
            // console.log(action)
            state.courseDetail = action.payload;
            return {...state}
            
        }
      
        default:
            return state
        }
}

export default CourseReducer;