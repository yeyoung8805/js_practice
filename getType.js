export default function getType(data) { //내보내지는(export) 가장 기본적인(default) 함수라고 선언
  return Object.prototype.toString.call(data).slice(8, -1);
}
