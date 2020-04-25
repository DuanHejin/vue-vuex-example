import {
  getObjectList as getObjectListFromDB,
  getObjectById as getObjectByIdFromDB,
 } from '../services/ObjectService';
import {
  MutationTypes,
} from '../constants';

const actions = {
  [MutationTypes.GET_OBJECT_LIST]: function(context) {
    getObjectListFromDB().then(({data}) => {
      context.commit(MutationTypes.GET_OBJECT_LIST, {objectList: data});
    }).catch(() => {
      context.commit(MutationTypes.GET_OBJECT_LIST, []);
    });
  },
  [MutationTypes.GET_OBJECT_BY_ID]: function(context, id) {
    context.commit(MutationTypes.INIT_DETAIL);

    getObjectByIdFromDB(id).then(({data}) => {
      context.commit(MutationTypes.GET_OBJECT_BY_ID, {object: data});
    }).catch(() => {
      context.commit(MutationTypes.GET_OBJECT_BY_ID, null);
    });
  },
};

export default actions;