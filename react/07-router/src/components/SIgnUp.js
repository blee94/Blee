import { useForm } from 'react-hook-form';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log('성공', data);
  };
  const onInvalid = (err) => {
    console.log('실패', err);
  };

  //   const genderRegister = register('gender', { required: '성별은 필수' });

  //   console.log(watch('ID'));

  return (
    <>
      <h4>ReactHookForm</h4>
      {/* handleSubmit(onValid[,onInvalid]) */}
      {/* onValid: 폼을 정상적으로 제출할 수 있는 상태일때 실행시킬 함수 */}
      {/* onInvalid: 폼을 제출할수 없을떄 실행시킬 함수 */}
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        {/* <input
          type='text'
          placeholder='아이디'
          {...register('ID', { required: '아이디는 필수' })}
        />
        <br />
        <input
          type='text'
          placeholder='이름'
          {...register('username', {
            required: '이름도 필수',
            minLength: {
              value: 2,
              message: '최소 두글자',
            },
          })}
        />
        <br />
        <input
          type='text'
          placeholder='이메일'
          {...register('email', {
            required: '이름도 필수',
            // pattern: {
            //   value:
            //     /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
            //   message: '올바르게 입력하세요',
            // },
            validate: (v) => v.includes('gmail.com') || 'gmail만 사용가능',
          })}
        />
        <label htmlFor='male'>
          <input type='radio' id='male' value='남' {...genderRegister} />남
        </label>
        <label htmlFor='female'>
          <input type='radio' id='female' value='여' {...genderRegister} />여
        </label>
        <br />
        {errors.ID?.message}
        {errors.username?.message}
        {errors.email?.message}
        {errors.gender?.message}
        {errors.option?.message}
        <br />

        <select {...register('option', { required: '옵션은 필수' })}>
          <option value=''>옵션</option>
          <option value='option-1'>옵션1</option>
          <option value='option-2'>옵션2</option>
          <option value='option-3'>옵션3</option>
        </select>
        <br />
        <button type='submit'>회원가입</button> */}
        <hr />
        <input
          type='text'
          placeholder='이름'
          {...register('username', { required: '이름을 필수로 입력하세요' })}
        />
        <br />
        <input
          type='number'
          placeholder='나이'
          {...register('age', {
            required: '나이를 입력해 주세요',
            min: {
              value: 0,
              message: '나이는 최소 0부터 입력하세요',
            },
          })}
        />
        <br />
        <button type='submit'>제출</button>
        {errors.name?.message}
        {errors.age?.message}
      </form>
    </>
  );
}
