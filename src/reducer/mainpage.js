import { contents as defaultContents} from '../content'

export default (contents = defaultContents,action)=> {

       const {type}=action
           switch (type) {
             case '' :return contents
           }
           return contents
}