/**
 * 
 */
package com.example.springsocial.tools;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

/**
 * @author jorge
 *
 */
public class DateTools<T> {
	private SimpleDateFormat _dateTimeSpanishFormat = new SimpleDateFormat ("dd/MM/yyyy hh:mm:ss");
	private SimpleDateFormat _dateSpanishFormat = new SimpleDateFormat ("dd/MM/yyyy");
	private SimpleDateFormat ISO8601DateFormat= new SimpleDateFormat ("yyyy-MM-dd'T'hh:mm:ss.SSSSSS'Z'");
	
	public Date get_CurrentDate(){
		return new Date();
	}
	
	@SuppressWarnings("unchecked")
	public T getDateTimeSpanishFormat(Date date){
		if (date==null){
			return null;
		}
		return (T) (_dateTimeSpanishFormat.format(date));
	}
	
	@SuppressWarnings("unchecked")
	public T getDateSpanishFormat(Date date){
		if (date==null){
			return null;
		}
		return (T) (_dateSpanishFormat.format(date));
	}
	
	public Date convertISO8601StringToDate(String date) throws ParseException {
		ISO8601DateFormat.setTimeZone(TimeZone.getTimeZone("UTC"));
        return ISO8601DateFormat.parse(date);
        
	}
	public Date getLastDateOfMonth(Date date){
		//return getLastDateOfMonth(new Date());
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.set(Calendar.DAY_OF_MONTH, cal.getActualMaximum(Calendar.DAY_OF_MONTH));
		return cal.getTime();
	 }
	 
	 public Date getLastDateOfCurrentDate(){
		 return getLastDateOfMonth(new Date());
	 }
	 
	 public int getLastDayOfCurrentDate(){
		 Calendar cal = Calendar.getInstance();
		 cal.setTime(new Date());
		 return  cal.getActualMaximum(Calendar.DAY_OF_MONTH);
	 }
	 
	 public int getMonthOfCurrentDate(){
		 Calendar cal = Calendar.getInstance();
		 cal.setTime(new Date());
		 return cal.get(Calendar.MONTH);
	 }
	 
	 public int getYearOfCurrentDate(){
		 Calendar cal = Calendar.getInstance();
		 cal.setTime(new Date());
		 return cal.get(Calendar.YEAR);
	 }
	 
	 public Date getDate(int ano, int mes){
		 Calendar cal = Calendar.getInstance();
		 cal.setTimeInMillis(0);
		 cal.set(ano, mes, 1, 0,0,0);
		 Date date = cal.getTime(); // get back a Date object
		 return date;
	 }
	
}
